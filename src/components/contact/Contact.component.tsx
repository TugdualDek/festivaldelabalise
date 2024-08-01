import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";

interface ContactPopupProps {
  children: React.ReactNode;
}

const ContactPopup = ({ children }: ContactPopupProps) => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer le message
    console.log("Données du formulaire:", formData);
    handleClose();
  };

  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    document.body.style.overflowY = "scroll";
    setTimeout(() => setIsOpen(true), 10);
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflowY = "";
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogTrigger asChild onClick={handleOpen}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contactez-nous</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Votre email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Votre message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Écrivez votre message ici..."
                required
              />
            </div>
          </div>
          <Button type="submit">Envoyer</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;
