import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  ArrowLeftRight, 
  Package, 
  Download,
  Calendar,
  BarChart3,
  PieChart,
  DollarSign,
  Leaf
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const mockAnalytics = {
  overview: {
    totalUsers: 12543,
    totalSwaps: 4231,
    totalItems: 18942,
    totalValue: 284750
  },
  growth: {
    userGrowth: 12.5,
    swapGrowth: 18.3,
    itemGrowth: 15.7,
    revenueGrowth: 22.1
  },
  topCategories: [
    { name: "Women's Clothing", count: 6420, percentage: 45.2 },
    { name: "Men's Clothing", count: 4130, percentage: 29.1 },
    { name: "Kids' Clothing", count: 2340, percentage: 16.5 },
    { name: "Accessories", count: 1052, percentage: 7.4 },
    { name: "Shoes", count: 250, percentage: 1.8 }
  ],
  recentSwaps: [
    { date: "Mar 15", count: 45 },
    { date: "Mar 14", count: 52 },
    { date: "Mar 13", count: 38 },
    { date: "Mar 12", count: 61 },
    { date: "Mar 11", count: 43 },
    { date: "Mar 10", count: 55 },
    { date: "Mar 9", count: 49 }
  ],
  sustainability: {
    itemsReused: 8943,
    carbonSaved: 2340,
    textileWastePrevented: 1567,
    waterSaved: 45200
  }
};

export function Analytics() {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics & Reports</h1>
          <p className="text-muted-foreground">Track platform performance and sustainability impact.</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="3months">Last 3 months</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">{formatNumber(mockAnalytics.overview.totalUsers)}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-primary" />
                  <span className="text-xs text-primary">+{mockAnalytics.growth.userGrowth}%</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Swaps</p>
                <p className="text-2xl font-bold">{formatNumber(mockAnalytics.overview.totalSwaps)}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-primary" />
                  <span className="text-xs text-primary">+{mockAnalytics.growth.swapGrowth}%</span>
                </div>
              </div>
              <ArrowLeftRight className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Items</p>
                <p className="text-2xl font-bold">{formatNumber(mockAnalytics.overview.totalItems)}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-primary" />
                  <span className="text-xs text-primary">+{mockAnalytics.growth.itemGrowth}%</span>
                </div>
              </div>
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Platform Value</p>
                <p className="text-2xl font-bold">{formatCurrency(mockAnalytics.overview.totalValue)}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-primary" />
                  <span className="text-xs text-primary">+{mockAnalytics.growth.revenueGrowth}%</span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Swap Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Daily Swap Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAnalytics.recentSwaps.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{day.date}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(day.count / 65) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium w-8 text-right">{day.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Category Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAnalytics.topCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 ? 'bg-primary' :
                      index === 1 ? 'bg-eco-500' :
                      index === 2 ? 'bg-warning' :
                      index === 3 ? 'bg-muted-foreground' : 'bg-destructive'
                    }`} />
                    <span className="text-sm">{category.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{category.percentage}%</Badge>
                    <span className="text-sm font-medium">{formatNumber(category.count)}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sustainability Impact */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-eco-600" />
            Sustainability Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-eco-50 rounded-lg">
              <div className="text-2xl font-bold text-eco-700">{formatNumber(mockAnalytics.sustainability.itemsReused)}</div>
              <div className="text-sm text-eco-600">Items Reused</div>
            </div>
            <div className="text-center p-4 bg-eco-50 rounded-lg">
              <div className="text-2xl font-bold text-eco-700">{formatNumber(mockAnalytics.sustainability.carbonSaved)} kg</div>
              <div className="text-sm text-eco-600">CO2 Emissions Saved</div>
            </div>
            <div className="text-center p-4 bg-eco-50 rounded-lg">
              <div className="text-2xl font-bold text-eco-700">{formatNumber(mockAnalytics.sustainability.textileWastePrevented)} kg</div>
              <div className="text-sm text-eco-600">Textile Waste Prevented</div>
            </div>
            <div className="text-center p-4 bg-eco-50 rounded-lg">
              <div className="text-2xl font-bold text-eco-700">{formatNumber(mockAnalytics.sustainability.waterSaved)} L</div>
              <div className="text-sm text-eco-600">Water Saved</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}