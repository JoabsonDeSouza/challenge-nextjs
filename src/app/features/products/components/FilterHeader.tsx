'use client';

import Sort from '@/components/assets/Sort';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { formatValueByCurrency } from '@/utils/functions';

interface FilterHeaderProps {
  range: number[];
  setRange: (value: number[]) => void;
  search: string;
  setSearch: (value: string) => void;
  handleSort: () => void;
  handleClearFilters: () => void;
}

export default function FilterHeader({
  range,
  setRange,
  search,
  setSearch,
  handleSort,
  handleClearFilters,
}: FilterHeaderProps) {
  return (
    <div className="flex md:items-center flex-col justify-center pt-4 self-center gap-3 px-6 xl:flex-row">
      <div className="md:justify-center flex flex-col md:mr-3">
        <span className="text-sm mb-[2px]">Preço:</span>
        <div className="flex gap-2">
          <span className="text-sm">{formatValueByCurrency(range[0])}</span>
          <Slider
            defaultValue={range}
            min={0}
            max={10000}
            step={200}
            onValueChange={setRange}
            className="w-48"
            lang="teste"
          />
          <span className="text-sm">{formatValueByCurrency(range[1])}</span>
        </div>
      </div>

      <div className="flex-1 w-full md:flex-2 flex gap-2 justify-center mt-2 md:mt-0">
        <Input
          className="w-full xl:w-3/6"
          placeholder="Buscar Produtos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-2">
          <Button onClick={() => handleSort()}>
            <Sort />
          </Button>
          <Button
            onClick={handleClearFilters}
            variant="outline"
            className="w-[40px] md:w-[120px]"
          >
            <span className="inline md:hidden">X</span>
            <span className="hidden md:inline">Limpar Filtros</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
