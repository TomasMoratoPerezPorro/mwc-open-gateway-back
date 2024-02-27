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
  const { data, error } = await query;

  // Handle the response
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
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
  