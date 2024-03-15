export default interface Row {
  url: string;
  product_name: string;
  manufacturer: string;
  pricing: number;
  composition: string;
  primary_image: string;
  images: string;
  product_description: string;
  prescription_required: "Yes" | "No";
  therapeutic_class: string;
  packaging_details: string;
  usage: string;
  benefits: string;
  storage: string;
}
