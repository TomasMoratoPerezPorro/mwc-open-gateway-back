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
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .eq('festival_id', festId);
  
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
  };