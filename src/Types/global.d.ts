export {};

declare global {
  type Movie = {
    id: number
    image: string
    price: number 
    title: string
    quantity: number
  }
}