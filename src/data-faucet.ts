import { Supply } from '@proc7ts/supply';
import { DataSink } from './data-sink.js';

export type DataFaucet<out T> = (sink: DataSink<T>, supply?: Supply) => Promise<void>;

export type IntakeFaucet<out T> = (sink: DataSink<T>, supply: Supply) => Promise<void>;

export type FaucetSeepType<TFaucet extends IntakeFaucet<unknown>> =
    TFaucet extends (sink: DataSink<infer T>) => Promise<void> ? T : never;
