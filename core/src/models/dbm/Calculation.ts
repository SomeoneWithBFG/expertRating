import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";

import * as CalculationResults from "./CalculationResult"
import { User } from "./User"

@Entity({ name: "calculations" })
export class Calculation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({default: () => "CURRENT_TIMESTAMP"})
  editedAt: Date;

  @Column()
  method: string;

  @Column()
  inputMatrix: string;

  @Column()
  x: number;

  @Column()
  y: number;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @OneToOne(() => CalculationResults.KemeniSnellaResult)
  @JoinColumn()
  kemeniSnellaResult: CalculationResults.KemeniSnellaResult;

  @OneToOne(() => CalculationResults.KondorseResult)
  @JoinColumn()
  kondorseResult: CalculationResults.KondorseResult;

  @OneToOne(() => CalculationResults.PairComparsionResult)
  @JoinColumn()
  pairComparsionResult: CalculationResults.PairComparsionResult;

  @OneToOne(() => CalculationResults.PreferenceResult)
  @JoinColumn()
  preferenceResult: CalculationResults.PreferenceResult;

  @OneToOne(() => CalculationResults.SequentiallyComparisonResult)
  @JoinColumn()
  sequentiallyComparisonResult: CalculationResults.SequentiallyComparisonResult;

  @OneToOne(() => CalculationResults.WeighingResult)
  @JoinColumn()
  weighingResult: CalculationResults.WeighingResult;
}
