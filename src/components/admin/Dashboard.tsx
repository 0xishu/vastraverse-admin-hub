import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Package, 
  ArrowLeftRight, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Eye,
  MoreHorizontal,
  Calendar,
  Shirt,
  Recycle
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const summaryCards = [
  {
    title: "Total Users",
    value: "12,543",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: Users,
    description: "Active platform members"
  },
  {
    title: "New Listings",
    value: "247",
    change: "+15.3%",
    changeType: "positive" as const,
    icon: Package,
    description: "This week"
  },
  {
    title: "Swaps Completed",
    value: "1,832",
    change: "+12.1%",
    changeType: "positive" as const,
    icon: ArrowLeftRight,
    description: "Last 30 days"
  },
  {
    title: "Pending Reports",
    value: "23",
    change: "-5.2%",
    changeType: "negative" as const,
    icon: AlertTriangle,
    description: "Require attention"
  }
];

const recentActivity = [
  {
    id: 1,
    type: "swap_completed",
    description: "Emma Wilson completed a swap with Alex Chen",
    time: "2 minutes ago",
    status: "completed"
  },
  {
    id: 2,
    type: "new_listing",
    description: "Sarah Kim listed a Vintage Denim Jacket",
    time: "5 minutes ago",
    status: "approved"
  },
  {
    id: 3,
    type: "report_submitted",
    description: "Inappropriate content reported by Mike Johnson",
    time: "12 minutes ago",
    status: "pending"
  },
  {
    id: 4,
    type: "user_joined",
    description: "New user Amanda Garcia joined the platform",
    time: "1 hour ago",
    status: "active"
  },
  {
    id: 5,
    type: "swap_requested",
    description: "David Lee requested a swap for Organic Cotton T-Shirt",
    time: "2 hours ago",
    status: "pending"
  }
];

const topCategories = [
  { name: "T-Shirts & Tops", count: 324, percentage: 35 },
  { name: "Dresses", count: 287, percentage: 31 },
  { name: "Jeans & Pants", count: 195, percentage: 21 },
  { name: "Jackets & Coats", count: 142, percentage: 15 },
  { name: "Accessories", count: 98, percentage: 11 }
];

export function Dashboard() {
  const getStatusBadge = (status: string) => {
    const variants = {
      completed: "default",
      approved: "default", 
      pending: "secondary",
      active: "secondary"
    } as const;
    
    return (
      <Badge variant={variants[status as keyof typeof variants] || "secondary"} className={
        status === "completed" || status === "approved" ? "bg-primary text-primary-foreground" : ""
      }>
        {status}
      </Badge>
    );
  };

  const getActivityIcon = (type: string) => {
    const icons = {
      swap_completed: ArrowLeftRight,
      new_listing: Package,
      report_submitted: AlertTriangle,
      user_joined: Users,
      swap_requested: ArrowLeftRight
    };
    
    const Icon = icons[type as keyof typeof icons] || Package;
    return <Icon className="h-4 w-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening on VastraVerse today.</p>
        </div>
        <Button className="gap-2">
          <Calendar className="h-4 w-4" />
          View Reports
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card) => (
          <Card key={card.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{card.value}</div>
              <div className="flex items-center gap-1 text-xs">
                {card.changeType === "positive" ? (
                  <TrendingUp className="h-3 w-3 text-success" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-destructive" />
                )}
                <span className={card.changeType === "positive" ? "text-success" : "text-destructive"}>
                  {card.change}
                </span>
                <span className="text-muted-foreground">{card.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className="p-2 bg-primary/10 rounded-full">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {activity.description}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  {getStatusBadge(activity.status)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shirt className="h-5 w-5" />
              Top Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCategories.map((category) => (
                <div key={category.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{category.name}</span>
                    <span className="text-muted-foreground">{category.count}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Impact Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Recycle className="h-5 w-5" />
            Sustainability Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2,847</div>
              <div className="text-sm text-muted-foreground">Items Reused</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1,423 kg</div>
              <div className="text-sm text-muted-foreground">Textiles Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">892</div>
              <div className="text-sm text-muted-foreground">CO₂ Reduced (kg)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">156</div>
              <div className="text-sm text-muted-foreground">Trees Saved</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}