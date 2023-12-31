import { StatusBar } from 'expo-status-bar';
import { Providers } from './src/Providers';
import { Routes } from '@routes/index';

export default function App() {
  return (
    <>
      <StatusBar animated translucent style='light' />
      <Providers>
        <Routes />
      </Providers>
    </>
  );
}
