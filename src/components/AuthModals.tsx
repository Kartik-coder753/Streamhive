
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuth } from '@/contexts/AuthContext';

interface AuthModalsProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'register';
}

export const AuthModals: React.FC<AuthModalsProps> = ({ 
  isOpen, 
  onClose,
  initialTab = 'login'
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(initialTab);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { signIn, signUp } = useAuth();
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      onClose();
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      onClose();
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-dark-800 border-dark-700">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-display">
            <span className="text-white">STREAM</span>
            <span className="bg-clip-text text-transparent bg-hive-gradient">HIVE</span>
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue={activeTab} onValueChange={(value) => setActiveTab(value as 'login' | 'register')} className="mt-4">
          <TabsList className="grid w-full grid-cols-2 bg-dark-700">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="your@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-xs text-hive-500 hover:underline">Forgot password?</a>
                </div>
                <Input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-hive-600 hover:bg-hive-700 text-black">
                Sign In
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="register-name">Full Name</Label>
                <Input
                  id="register-name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input
                  id="register-email"
                  placeholder="your@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <Input
                  id="register-password"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <input type="checkbox" id="terms" className="rounded bg-dark-700 border-dark-600" />
                <label htmlFor="terms">
                  I agree to the <a href="#" className="text-hive-500 hover:underline">Terms</a> and <a href="#" className="text-hive-500 hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <Button type="submit" className="w-full bg-hive-600 hover:bg-hive-700 text-black">
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
        
        <div className="mt-4 text-center text-sm text-white/70">
          <span>or continue with</span>
          <div className="flex justify-center gap-4 mt-3">
            <button className="bg-dark-700 hover:bg-dark-600 transition-colors duration-200 p-2 rounded">
              Google
            </button>
            <button className="bg-dark-700 hover:bg-dark-600 transition-colors duration-200 p-2 rounded">
              Facebook
            </button>
            <button className="bg-dark-700 hover:bg-dark-600 transition-colors duration-200 p-2 rounded">
              Apple
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
