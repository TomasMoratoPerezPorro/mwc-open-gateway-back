import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export const getUsers = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('users')
    .select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('user_id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

// Implement POST, PATCH, DELETE similarly
