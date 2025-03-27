'use client';

export default function Filters({ config, values, onChange }) {
  const handleFilterChange = (key, value) => {
    onChange(key, value);
  };

  return (
    <div className="space-y-6">
      {config.map(filter => (
        <div key={filter.key} className="border-b pb-4">
          <h3 className="font-semibold mb-3">{filter.name}</h3>
          
          {filter.type === 'checkbox' ? (
            filter.options.map(option => (
              <label key={option} className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={values[filter.key] === option}
                  onChange={() => handleFilterChange(filter.key, option)}
                  className="form-checkbox h-4 w-4 text-[#f59b00]"
                />
                <span>{option} л</span>
              </label>
            ))
          ) : (
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Мин"
                value={values[`${filter.key}_min`] || ''}
                onChange={e => handleFilterChange(`${filter.key}_min`, e.target.value)}
                className="border p-2 w-1/2"
              />
              <input
                type="number"
                placeholder="Макс"
                value={values[`${filter.key}_max`] || ''}
                onChange={e => handleFilterChange(`${filter.key}_max`, e.target.value)}
                className="border p-2 w-1/2"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};