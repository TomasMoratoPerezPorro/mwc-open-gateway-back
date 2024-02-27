import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export const getUserRoutes = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from('User_Routes').select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

export const getUserRouteById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { data, error } = await supabase.from('User_Routes').select('*').eq('user_route_id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};
