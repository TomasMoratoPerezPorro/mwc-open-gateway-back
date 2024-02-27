import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export const getRoutes = async (req: Request, res: Response) => {
    const { data, error } = await supabase
      .from('Routes')
      .select('*');
  
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
  };
  
  export const getRouteById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { data, error } = await supabase
      .from('Routes')
      .select('*')
      .eq('route_id', id);
  
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
  };
  