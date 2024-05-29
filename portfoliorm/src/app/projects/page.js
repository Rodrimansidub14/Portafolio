import ProjectList from '@/components/ProjectList';
import Modal from '@/components/Modal';
import { PopupProvider } from '@/components/popupcontext';

export default function Home() {
  return (
      <PopupProvider>
        <main className='min-h-screen'>
          <ProjectList />
          <Modal />
        </main>
      </PopupProvider>
  );
}
