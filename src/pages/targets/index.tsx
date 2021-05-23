import { MainLayout } from '@/layouts/MainLayout';
import { TargetsLayout } from '@/layouts/TargetsLayout';


export default function HomePage() {
    return (
        <>
            <MainLayout title={'Цели'}>
                <TargetsLayout /> 
            </MainLayout>
        </>
    );
}
  
