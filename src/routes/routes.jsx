import { lazy } from "react";

export const Home=lazy(()=>import ("../pages/home-page/home"))
export const About=lazy(()=>import ("../pages/about-page/about"))
export const Pricing=lazy(()=>import ("../pages/pricing-page/price"))
export const Contact=lazy(()=>import ("../pages/contact-page/contact"))
export const Blog=lazy(()=>import ("../pages/blog-page/blog"))
export const Detail=lazy(()=>import ("../pages/detail-page/detail"))