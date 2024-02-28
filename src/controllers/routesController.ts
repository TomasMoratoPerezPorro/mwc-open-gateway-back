import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export const getRoutes = async (req: Request, res: Response) => {
  // Start building the query
  let query = supabase.from('routes').select('*');

  // Dynamically add filters based on query parameters
  if (req.query.route_id) {
    query = query.eq('route_id', req.query.route_id);
  }
  if (req.query.start_coordinates_latitude) {
    query = query.eq('start_coordinates_latitude', req.query.start_coordinates_latitude);
  }
  if (req.query.start_coordinates_longitude) {
    query = query.eq('start_coordinates_longitude', req.query.start_coordinates_longitude);
  }
  if (req.query.end_coordinates_latitude) {
    query = query.eq('end_coordinates_latitude', req.query.end_coordinates_latitude);
  }
  if (req.query.end_coordinates_longitude) {
    query = query.eq('end_coordinates_longitude', req.query.end_coordinates_longitude);
  }
  if (req.query.pickup_time) {
    query = query.eq('pickup_time', req.query.pickup_time);
  }
  if (req.query.drop_time) {
    query = query.eq('drop_time', req.query.drop_time);
  }
  if (req.query.status_id) {
    query = query.eq('status_id', req.query.status_id);
  }
  if (req.query.driver_id) {
    query = query.eq('driver_id', req.query.driver_id);
  }
  if (req.query.vip_id) {
    query = query.eq('vip_id', req.query.vip_id);
  }
  if (req.query.vehicle_id) {
    query = query.eq('vehicle_id', req.query.vehicle_id);
  }
  if (req.query.festival_id) {
    query = query.eq('festival_id', req.query.festival_id);
  }

  // Execute the query
  let { data, error } = await query;

  // Handle the response
  if (error) return res.status(400).json({ error: error.message });

  //status name
  let data2=data
  let all=[]
  for (let i in data2){
    let { data, error } = await supabase
    .from('route_statuses')
    .select('*')
    .eq('status_id', data2[i].status_id);
    data2[i].status_name=data[0].status_name
    all.push(data2[i])
  }
  //vip name
  for (let i in data2){
    let { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('user_id', data2[i].vip_id);
    data2[i].vip_name=data[0].username
    all.push(data2[i])
  }
  //vip name
  for (let i in data2){
    let { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('user_id', data2[i].driver_id);
    data2[i].driver_name=data[0].username
    all.push(data2[i])
  }

  res.json(data2);
};
  
  export const getRouteById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { data, error } = await supabase
      .from('routes')
      .select('*')
      .eq('route_id', id);
  
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
  };

export const postRoute = async (req: Request, res: Response) => {


  const { data, error } = await supabase
  .from('routes')
  .insert([
    //{ route_id: '50000000-0000-0000-0000-000000000002', start_coordinates_latitude: 42.11111, start_coordinates_longitude: 2.11111, end_coordinates_latitude: 43.11111, end_coordinates_longitude: 3.11111, pickup_time: "2023-02-01 08:00:00", drop_time: '2023-03-01 08:00:00', status_id: '20000000-0000-0000-0000-000000000001', driver_id: '30000000-0000-0000-0000-000000000001', vip_id: '30000000-0000-0000-0000-000000000002', vehicle_id: '40000000-0000-0000-0000-000000000001', festival_id: '00000000-0000-0000-0000-000000000001' }
    { route_id: req.body.route_id, start_coordinates_latitude: req.body.start_coordinates_latitude, start_coordinates_longitude: req.body.start_coordinates_longitude, end_coordinates_latitude: req.body.end_coordinates_latitude, end_coordinates_longitude: req.body.end_coordinates_longitude, pickup_time: req.body.pickup_time, drop_time: req.body.drop_time, status_id: req.body.status_id, driver_id: req.body.driver_id, vip_id: req.body.vip_id, vehicle_id: req.body.vehicle_id, festival_id: req.body.festival_id }
  ])
  .select()
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);

};
  