import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("ar-MR").format(amount) + " MRU";
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ar-MR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatPhone(phone: string): string {
  return phone;
}
