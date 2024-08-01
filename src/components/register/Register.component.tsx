"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React from "react";

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  codeParrainage: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    nom: "",
    prenom: "",
    email: "",
    codeParrainage: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Ajoutez ici la logique pour traiter les données du formulaire
  };

  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-center">
            S'enregistrer pour l'évènement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="nom">Nom</Label>
                <Input
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="prenom">Prénom</Label>
                <Input
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5 md:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5 md:col-span-2">
                <Label htmlFor="codeParrainage">Code de parrainage</Label>
                <Input
                  id="codeParrainage"
                  name="codeParrainage"
                  value={formData.codeParrainage}
                  onChange={handleInputChange}
                />
              </div>
              <Button type="submit" className="md:col-span-2">
                Envoyer
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
