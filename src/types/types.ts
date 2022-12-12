import { CartItemInterface } from '../pages/cartPage/components/interface';

export interface CommonErrorResponseType {
  data: null
  errors: {
    name: string
    email: string
    password: string
  }
}

export interface User {
  _id: string
  name: string
  email: string
  cart: CartItemInterface[]
  createdAt?: string
  updatedAt?: string
  provider?: string
  blocked?: boolean
  confirmed?: boolean
}

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  name: string
  email: string
  password: string
}

export interface AuthResponseDataType {
  jwt: string
  user: User
}

export interface UserStore {
  isDarkMode: boolean
  toggleMode: (checked: boolean) => void
  currentUser: User | null
  setUser: (currentUser: User | null) => void
  addNewCartItem: (newItem: CartItemInterface) => void
  changeCountOfItems: (action: string, id: string) => void
  removeCartItem: (id: string) => void
  clearItems: () => void
  error: string | null
  setError: (error: string) => void
}

export interface CheckoutSessionResponse {
    sessionId: string
}

export interface LineItem {
  quantity: number
  price_data: {
    currency: string
    unit_amount: number
    product_data: {
      name: string
      description: string
      images: string[]
    }
  }
}

export interface CheckoutSessionPayload {
  line_items: LineItem[]
  customer_email: string
}

export interface LogOutResponse {
  logout: boolean
}
