import { Request, Response } from 'express';
import { supabase } from '../config/supabase';
export const getFestivals = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from('Festivals').select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

export const getFestivalById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { data, error } = await supabase.from('Festivals').select('*').eq('festival_id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};
