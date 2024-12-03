import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';

const data = [
  { name: 'Jan', totalLeads: 50, totalSales: 20, roi: 20000, adSpend: 40 },
  { name: 'Feb', totalLeads: 60, totalSales: 25, roi: 22000, adSpend: 45 },
  { name: 'Mar', totalLeads: 55, totalSales: 22, roi: 21000, adSpend: 42 },
  { name: 'Apr', totalLeads: 65, totalSales: 28, roi: 24000, adSpend: 47 },
  { name: 'May', totalLeads: 52, totalSales: 21, roi: 20500, adSpend: 41 },
  { name: 'Jun', totalLeads: 58, totalSales: 24, roi: 22500, adSpend: 44 },
  { name: 'Jul', totalLeads: 53, totalSales: 23, roi: 21000, adSpend: 43 },
  { name: 'Aug', totalLeads: 61, totalSales: 26, roi: 23000, adSpend: 46 },
  { name: 'Sep', totalLeads: 57, totalSales: 25, roi: 22500, adSpend: 45 },
  { name: 'Oct', totalLeads: 62, totalSales: 27, roi: 24000, adSpend: 47 },
  { name: 'Nov', totalLeads: 54, totalSales: 22, roi: 21000, adSpend: 42 },
  { name: 'Dec', totalLeads: 59, totalSales: 24, roi: 23000, adSpend: 44 }
];

const bookOfBusinessData = [
  { id: 1, name: 'Acme Inc.', value: 100000 },
  { id: 2, name: 'Globex Corp', value: 150000 },
  { id: 3, name: 'Stark Enterprises', value: 175000 },
  { id: 4, name: 'Wayne Enterprises', value: 225000 },
  { id: 5, name: 'Stark Research', value: 150000 },
  { id: 6, name: 'Oscorp Industries', value: 120000 }
];

const UpdatedDashboard = () => {
  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <CardTitle>Updated Dashboard with Swapped Charts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Total Leads</h3>
            <BarChart width={400} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalLeads" fill="#8884d8" />
            </BarChart>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Total Sales</h3>
            <BarChart width={400} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalSales" fill="#82ca9d" />
            </BarChart>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Current ROI</h3>
            <BarChart width={400} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="roi" fill="#ffc658" />
            </BarChart>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Total Ad Spend</h3>
            <BarChart width={400} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="adSpend" fill="#9381ff" />
            </BarChart>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium mb-2">Book of Business</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 border text-left">Customer</th>
                <th className="p-2 border text-right">Value</th>
              </tr>
            </thead>
            <tbody>
              {bookOfBusinessData.map(row => (
                <tr key={row.id}>
                  <td className="p-2 border">{row.name}</td>
                  <td className="p-2 border text-right">${row.value.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpdatedDashboard;
