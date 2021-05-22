import { MainLayout } from '@/layouts/MainLayout'; 
import data from '@/data/training.json';
import { TrainingLayout } from '@/layouts/TrainingLayout'; 



const languageUI = 'ru';
const content = data;

export default function GrammarMenuPage() {
    return (

        <>
            { content.length && (
                <MainLayout title={`Тренировка ${content[0][languageUI].title.text}`} >
                    <TrainingLayout {...content[0][languageUI]}/> 
                </MainLayout>
            )}
        </>
    );
}
  