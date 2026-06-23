import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkout extends Document {
  name: string;
  description: string;
  duration: number;
  exercises: string[];
  difficulty: string;
  createdAt: Date;
  updatedAt: Date;
}

const workoutSchema = new Schema<IWorkout>(
  {
    name: { type: String, required: true },
    description: { type: String },
    duration: { type: Number, required: true },
    exercises: [{ type: String }],
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'] },
  },
  { timestamps: true }
);

export const Workout = mongoose.model<IWorkout>('Workout', workoutSchema);
