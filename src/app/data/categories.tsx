import { Table, Coffee, ChefHat, Archive, Home } from 'lucide-react';

export const categories = [
    { id: "all", name: "Todos", description: "Ver todo", icon: <Home className="w-5 h-5" /> },
    { id: "mesas", name: "Mesas", description: "Mesas de comedor", icon: <Table className="w-5 h-5" /> },
    { id: "sillas", name: "Sillas", description: "Sillas de comedor", icon: <ChefHat className="w-5 h-5" /> },
    { id: "ratonas", name: "Ratonas", description: "Mesas de centro", icon: <Coffee className="w-5 h-5" /> },
    { id: "almacenaje", name: "Almacenaje", description: "Vajilleros y más", icon: <Archive className="w-5 h-5" /> }
];
