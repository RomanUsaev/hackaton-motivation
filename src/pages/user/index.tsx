import { MainLayout } from '@/layouts/MainLayout';
import { UserLayout } from '@/layouts/UserLayout';

export default function HomePage() {
    return (
        <>
            <MainLayout title={'Достижения'}>
                <UserLayout />    
            </MainLayout>
        </>
    );
}
  
