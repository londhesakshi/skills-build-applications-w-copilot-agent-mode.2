import mongoose, { Schema, Document } from 'mongoose';

export interface ILeaderboard extends Document {
  user: mongoose.Types.ObjectId;
  team: mongoose.Types.ObjectId;
  totalCalories: number;
  totalWorkouts: number;
  rank: number;
  createdAt: Date;
  updatedAt: Date;
}

const leaderboardSchema = new Schema<ILeaderboard>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    totalCalories: { type: Number, default: 0 },
    totalWorkouts: { type: Number, default: 0 },
    rank: { type: Number },
  },
  { timestamps: true }
);

export const Leaderboard = mongoose.model<ILeaderboard>('Leaderboard', leaderboardSchema);
