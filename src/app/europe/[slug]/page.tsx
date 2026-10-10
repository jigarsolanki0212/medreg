import { serviceRoute } from '@/lib/servicePage';

const route = serviceRoute('europe');

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
