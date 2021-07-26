import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'pair-comparsion-result' })
export class PairComparsionResult {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    editedAt: Date

    @Column()
    values: string

    @Column()
    sumOfValues: number

    @Column()
    weights: string

    @Column()
    order: string
}

@Entity({ name: 'sequentially-comparison-result' })
export class SequentiallyComparisonResult {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    editedAt: Date

    @Column()
    causedCorrections: string

    @Column()
    correctedEvaluations: string

    @Column()
    sumOfWeights: number

    @Column()
    weights: string

    @Column()
    order: string
}

@Entity({ name: 'weighing-result' })
export class WeighingResult {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    editedAt: Date

    @Column({ type: 'float' })
    sumOfMarks: number

    @Column()
    relativeExpertsMarks: string

    @Column()
    weights: string

    @Column()
    order: string
}

@Entity({ name: 'preference-result' })
export class PreferenceResult {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    editedAt: Date

    @Column()
    modMatrix: string

    @Column()
    sumMarks: string

    @Column()
    sumOfMarks: number

    @Column()
    weights: string

    @Column()
    order: string
}

@Entity({ name: 'kondorse-result' })
export class KondorseResult {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    editedAt: Date

    @Column()
    modMatrix: string

    @Column()
    best: number
}

@Entity({ name: 'kemeni-snella-result' })
export class KemeniSnellaResult {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    editedAt: Date

    @Column()
    binaryMatrixArray: string

    @Column()
    looseMatrix: string

    @Column()
    order: string
}
