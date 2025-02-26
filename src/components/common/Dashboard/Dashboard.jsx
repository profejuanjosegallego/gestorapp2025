import * as Recharts from "recharts"; // Importación alternativa para evitar errores
import { Box, Card, CardContent, Typography } from "@mui/material";

// Datos de ejemplo para el gráfico
const data = [
  { name: "Turbo", power: 50 },
  { name: "ECU", power: 35 },
  { name: "Escape", power: 20 },
  { name: "Filtro", power: 15 },
];

const Dashboard = () => {
  console.log("✅ Dashboard cargado correctamente"); // Verifica que se imprime en consola

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 3 }}>
      <Typography variant="h4" textAlign="center">
        📊 Optimizacion de la potencia con los repuestos
      </Typography>

      <Card sx={{ padding: 2 }}>
        <CardContent>
          <Typography variant="h6">Aumento de Potencia por Componente</Typography>
          <Recharts.ResponsiveContainer width="100%" height={300}>
            <Recharts.BarChart data={data}>
              <Recharts.XAxis dataKey="name" />
              <Recharts.YAxis />
              <Recharts.Tooltip />
              <Recharts.Bar dataKey="power" fill="#ff9800" />
            </Recharts.BarChart>
          </Recharts.ResponsiveContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;
