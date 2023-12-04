export enum SelectedPage {
  Home = "home",
  AboutUs = "aboutus",
  OurValues = "ourvalues",
  OurProduct = "ourproduct",
  FAQ = "faq",
  Testimonials = "testimonials",
  ContactUs = "contactus",
  OurProject = "ourproject"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ValueType {
  name: string;
  description?: string;
  image: string;
}
