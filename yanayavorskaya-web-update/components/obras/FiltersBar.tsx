import React from 'react';
import { COLLECTIONS_LIST } from '../../data/obrasData';

interface FiltersBarProps {
  selectedCollection: string;
  onSelectCollection: (col: string) => void;
  selectedStatus: string;
  onSelectStatus: (status: string) => void;
  sortBy: 'recent' | 'price-asc' | 'price-desc' | 'name';
  onSelectSortBy: (sort: 'recent' | 'price-asc' | 'price-desc' | 'name') => void;
  totalWorks: number;
}

/**
 * Barra de filtros discreta para la Galería Premium.
 * Permite filtrar por Colección, Estado de Disponibilidad y ordenar por Fecha, Precio y Nombre.
 */
export const FiltersBar: React.FC<FiltersBarProps> = ({
  selectedCollection,
  onSelectCollection,
  selectedStatus,
  onSelectStatus,
  sortBy,
  onSelectSortBy,
  totalWorks,
}) => {
  return (
    <div className="border-y border-neutral-200 py-6 mb-12 bg-white/50 backdrop-blur-sm sticky top-0 z-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Filtro por Colección */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] uppercase font-mono tracking-widest text-neutral-400 mr-2">
            Colección:
          </span>
          {COLLECTIONS_LIST.map((col) => (
            <button
              key={col}
              onClick={() => onSelectCollection(col)}
              className={`px-3 py-1.5 text-xs font-sans transition-all duration-300 ${
                selectedCollection === col
                  ? 'bg-neutral-900 text-white font-medium shadow-sm'
                  : 'bg-transparent text-neutral-600 hover:text-neutral-900 border border-transparent hover:border-neutral-300'
              }`}
            >
              {col}
            </button>
          ))}
        </div>

        {/* Filtro de Disponibilidad y Ordenación */}
        <div className="flex items-center justify-between lg:justify-end gap-6 flex-wrap border-t lg:border-t-0 pt-4 lg:pt-0 border-neutral-100">
          
          {/* Filtro por Estado */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase font-mono tracking-widest text-neutral-400">
              Estado:
            </span>
            <select
              value={selectedStatus}
              onChange={(e) => onSelectStatus(e.target.value)}
              className="bg-transparent text-xs font-sans border border-neutral-300 py-1.5 px-3 text-neutral-800 focus:outline-none focus:border-neutral-900 cursor-pointer"
            >
              <option value="Todos">Todos los estados</option>
              <option value="Disponible">Disponible</option>
              <option value="Reservada">Reservada</option>
              <option value="Vendida">Vendida (Prestigio)</option>
            </select>
          </div>

          {/* Ordenar por */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase font-mono tracking-widest text-neutral-400">
              Ordenar por:
            </span>
            <select
              value={sortBy}
              onChange={(e) => onSelectSortBy(e.target.value as any)}
              className="bg-transparent text-xs font-sans border border-neutral-300 py-1.5 px-3 text-neutral-800 focus:outline-none focus:border-neutral-900 cursor-pointer"
            >
              <option value="recent">Más recientes (Año)</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="name">Nombre alfabético (A-Z)</option>
            </select>
          </div>

          {/* Contador discreto */}
          <div className="text-xs font-mono text-neutral-400 pl-4 border-l border-neutral-200 hidden sm:block">
            {totalWorks} {totalWorks === 1 ? 'obra mostrada' : 'obras mostradas'}
          </div>
        </div>

      </div>
    </div>
  );
};
