import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { StatCard } from '../common/StatCard';
import { ChartCard } from '../common/ChartCard';
import { precise } from '../../utils/precise';

export function CostsTab({
  data,
  units,
  darkMode,
  chartColors,
  costs,
  electricityPrice,
  petrolPrice,
  petrolConsumption
}) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard darkMode={darkMode} label="Electric Cost" value={units.money(costs.electricCost)} subtitle={`${units.money(costs.costPerDistElectric)}/${units.distUnit}`} color="emerald" />
        <StatCard darkMode={darkMode} label="Petrol Equivalent" value={units.money(costs.petrolCost)} subtitle={`${units.money(costs.costPerDistPetrol)}/${units.distUnit}`} color="red" />
        <StatCard darkMode={darkMode} label="Total Savings" value={units.money(costs.savings)} subtitle="vs petrol" color="sky" />
        <StatCard darkMode={darkMode} label="Savings Rate" value={`${costs.savingsRate}%`} subtitle="cheaper" color="blue" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ChartCard darkMode={darkMode} title="Monthly Costs">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={data.monthlyData.map(m => ({
              ...m,
              electricCost: Math.round(precise.mul(precise.mul(precise.div(m.distance, 100), m.consumption), electricityPrice)),
              petrolCost: Math.round(precise.mul(precise.mul(precise.div(m.distance, 100), petrolConsumption), petrolPrice))
            }))}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis dataKey="month" stroke={chartColors.axis} fontSize={11} />
              <YAxis stroke={chartColors.axis} fontSize={11} />
              <Tooltip contentStyle={{ background: chartColors.tooltipBg, border: `1px solid ${chartColors.tooltipBorder}`, borderRadius: '8px' }} itemStyle={{ color: chartColors.tooltipText }} labelStyle={{ color: chartColors.tooltipText }} formatter={(v) => units.money(v)} />
              <Legend />
              <Bar dataKey="electricCost" name={`Electric (${units.currSymbol})`} fill="#22c55e" radius={[4, 4, 0, 0]} />
              <Bar dataKey="petrolCost" name={`Petrol (${units.currSymbol})`} fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard darkMode={darkMode} title="Cumulative Savings">
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={data.monthlyData.reduce((acc, m, i) => {
              const elec = precise.mul(precise.mul(precise.div(m.distance, 100), m.consumption), electricityPrice);
              const pet = precise.mul(precise.mul(precise.div(m.distance, 100), petrolConsumption), petrolPrice);
              const sav = precise.sub(pet, elec);
              const prev = i > 0 ? acc[i - 1].cumRaw : 0;
              const cumRaw = precise.add(prev, sav);
              return [...acc, { ...m, cumulative: Math.round(cumRaw), cumRaw }];
            }, [])}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis dataKey="month" stroke={chartColors.axis} fontSize={11} />
              <YAxis stroke={chartColors.axis} fontSize={11} />
              <Tooltip contentStyle={{ background: chartColors.tooltipBg, border: `1px solid ${chartColors.tooltipBorder}`, borderRadius: '8px' }} itemStyle={{ color: chartColors.tooltipText }} labelStyle={{ color: chartColors.tooltipText }} formatter={(v) => units.money(v)} />
              <Area type="monotone" dataKey="cumulative" name={`Saved (${units.currSymbol})`} stroke="#f59e0b" fill="#f59e0b44" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
