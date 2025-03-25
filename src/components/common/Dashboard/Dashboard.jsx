import { Calendario } from "../Calendario/Calendario";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Box, Card, CardContent, Typography } from "@mui/material";
import "./Dashboard.css";  


const data1 = [
  { name: "Turbo", power: 50 },
  { name: "ECU", power: 35 },
  { name: "Escape", power: 20 },
  { name: "Filtro", power: 15 },
];

const data2 = [
  { name: "Motor Stock", power: 100 },
  { name: "Stage 1", power: 130 },
  { name: "Stage 2", power: 160 },
  { name: "Stage 3", power: 200 },
];

const data3 = [
  { name: "Turbo", value: 40 },
  { name: "ECU", value: 30 },
  { name: "Escape", value: 20 },
  { name: "Filtro", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2, padding: 2, justifyContent: "center" }}>
      {/* Gráfico de barras mejorado */}
      <Card sx={{ padding: 1, width: 320, boxShadow: 3, borderRadius: 2, backgroundColor: "#f8f9fa" }}>
        <CardContent>
          <Typography variant="body1" textAlign="center" gutterBottom>
            Aumento de Potencia
          </Typography>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={data1}>
              <XAxis dataKey="name" fontSize={12} tick={{ fill: "#333" }} />
              <YAxis fontSize={12} tick={{ fill: "#333" }} />
              <Tooltip cursor={{ fill: "#eeeeee" }} />
              <Legend />
              <Bar dataKey="power" fill="url(#colorPower)" barSize={25} radius={[10, 10, 10, 10]}>
                <defs>
                  <linearGradient id="colorPower" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff5722" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ff9800" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Gráfico de líneas */}
      <Card sx={{ padding: 1, width: 320, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="body1" textAlign="center" gutterBottom>
            Comparación Motor Stock vs. Mejoras
          </Typography>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={data2}>
              <XAxis dataKey="name" fontSize={12} tick={{ fill: "#333" }} />
              <YAxis fontSize={12} tick={{ fill: "#333" }} />
              <Tooltip cursor={{ stroke: "#ff0000", strokeWidth: 2 }} />
              <Legend />
              <Line type="monotone" dataKey="power" stroke="#ff0000" strokeWidth={3} dot={{ fill: "#ff0000" }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Gráfico de pastel */}
      <Card sx={{ padding: 1, width: 320, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="body1" textAlign="center" gutterBottom>
            Distribución de Potencia por Componente
          </Typography>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={data3} cx="50%" cy="50%" outerRadius={70} fill="#8884d8" dataKey="value">
                {data3.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;
