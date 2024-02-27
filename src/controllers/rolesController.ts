import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export const getRoles = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from('roles').select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

export const getRoleById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { data, error } = await supabase.from('roles').select('*').eq('role_id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};
