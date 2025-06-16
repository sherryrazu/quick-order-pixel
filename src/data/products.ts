
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    description: 'Experience crystal-clear audio with our premium wireless headphones. Perfect for music lovers and professionals.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium leather ear cups',
      'Bluetooth 5.0 connectivity',
      'Built-in microphone'
    ]
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.',
    features: [
      'Heart rate monitoring',
      'Built-in GPS',
      'Water resistant',
      '7-day battery life',
      'Multiple workout modes'
    ]
  }
];
