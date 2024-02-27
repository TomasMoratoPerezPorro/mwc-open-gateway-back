import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export const getRouteStatuses = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from('Route_Statuses').select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

export const getRouteStatusById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { data, error } = await supabase.from('Route_Statuses').select('*').eq('status_id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};
