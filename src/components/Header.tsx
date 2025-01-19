import React, { useState } from 'react';
import { Phone, Mail, Search, ShoppingCart, Menu, User } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useAuthActions } from '../hooks/useAuthActions';
import AuthModal from './auth/AuthModal';
import Container from './layout/Container';

export default function Header() {
  const { user } = useAuth();
  const { handleLogout } = useAuthActions();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <header>
      <div className="bg-green-700 text-white py-2">
        <Container className="!max-h-none">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@recambioverde.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <button className="hover:text-green-200 flex items-center gap-2">
                    <User size={16} />
                    <span>{user.email}</span>
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="hover:text-green-200"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => handleAuthClick('register')}
                    className="hover:text-green-200"
                  >
                    Registrarse
                  </button>
                  <button 
                    onClick={() => handleAuthClick('login')}
                    className="hover:text-green-200"
                  >
                    Iniciar Sesión
                  </button>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
      
      {showAuthModal && (
        <AuthModal 
          mode={authMode} 
          onClose={() => setShowAuthModal(false)} 
        />
      )}
    </header>
  );
}