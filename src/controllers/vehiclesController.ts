import { Request, Response } from 'express';
import { supabase } from '../config/supabase';
export const getVehicles = async (req: Request, res: Response) => {
    const { data, error } = await supabase
      .from('vehicles')
      .select('*');
  
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
  };
  
  export const getVehicleById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .eq('vehicle_id', id);
  
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
  };
  
  export const getVehicleByFestivalId = async (req: Request, res: Response) => {
    const festId = req.params.festId;
    let { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .eq('festival_id', festId)

    if (error) return res.status(400).json({ error: error.message });
    let data2=data
    let all=[]
    for( let i in data2){
      let { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('user_id', data2[i].main_driver_id)
      data2[i].name=data[0].username
      all.push(data2[i])
    }


    res.json(all);
  };