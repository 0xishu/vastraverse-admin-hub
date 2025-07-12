import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeftRight, 
  Search, 
  Filter,
  MoreHorizontal,
  Eye,
  X,
  Check,
  Clock,
  TrendingUp
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockSwaps = [
  {
    id: 1,
    fromUser: "Ananya Iyer",
    toUser: "Rahul Mehta",
    fromItem: "Vintage Denim Jacket",
    toItem: "Formal Black Blazer",
    requestDate: "2024-03-15",
    status: "pending",
    category: "Cross-Gender"
  },
  {
    id: 2,
    fromUser: "Mehak Kaur",
    toUser: "Nikita Sharma",
    fromItem: "Floral Summer Dress",
    toItem: "Winter Wool Sweater",
    requestDate: "2024-03-14",
    status: "accepted",
    category: "Women"
  },
  {
    id: 3,
    fromUser: "Aarav Desai",
    toUser: "Kabir Nanda",
    fromItem: "Kids Cotton T-Shirt",
    toItem: "Casual Jeans",
    requestDate: "2024-03-13",
    status: "completed",
    category: "Mixed"
  },
  {
    id: 4,
    fromUser: "Shruti Menon",
    toUser: "Zoya Qureshi",
    fromItem: "Ethnic Kurta",
    toItem: "Party Wear Top",
    requestDate: "2024-03-12",
    status: "cancelled",
    category: "Women"
  },
  {
    id: 5,
    fromUser: "Rohan Verma",
    toUser: "Aditya Joshi",
    fromItem: "Sports Jacket",
    toItem: "Formal Shirt",
    requestDate: "2024-03-11",
    status: "in_progress",
    category: "Men"
  },
  {
    id: 6,
    fromUser: "Aisha Siddiqui",
    toUser: "Tanya Bansal",
    fromItem: "Designer Handbag",
    toItem: "Leather Boots",
    requestDate: "2024-03-10",
    status: "pending",
    category: "Accessories"
  }
];

export function SwapMonitoring() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredSwaps = mockSwaps.filter(swap => {
    const matchesSearch = swap.fromUser.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         swap.toUser.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         swap.fromItem.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         swap.toItem.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || swap.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || swap.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    const config = {
      pending: { variant: "secondary" as const, className: "bg-warning text-warning-foreground" },
      accepted: { variant: "default" as const, className: "bg-primary text-primary-foreground" },
      completed: { variant: "default" as const, className: "bg-primary text-primary-foreground" },
      cancelled: { variant: "destructive" as const, className: "" },
      in_progress: { variant: "secondary" as const, className: "bg-eco-100 text-foreground" }
    };
    
    const { variant, className } = config[status as keyof typeof config] || config.pending;
    
    return (
      <Badge variant={variant} className={className}>
        {status.replace('_', ' ')}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Swap Monitoring</h1>
          <p className="text-muted-foreground">Monitor and manage clothing swap transactions between users.</p>
        </div>
        <Button className="gap-2">
          <TrendingUp className="h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-warning" />
              <div>
                <p className="text-2xl font-bold">18</p>
                <p className="text-sm text-muted-foreground">Pending Swaps</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">342</p>
                <p className="text-sm text-muted-foreground">Completed This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <ArrowLeftRight className="h-5 w-5 text-eco-500" />
              <div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-muted-foreground">Total Swaps</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <X className="h-5 w-5 text-destructive" />
              <div>
                <p className="text-2xl font-bold">23</p>
                <p className="text-sm text-muted-foreground">Cancelled</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Swap Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search by user or item..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Women">Women</SelectItem>
                <SelectItem value="Men">Men</SelectItem>
                <SelectItem value="Cross-Gender">Cross-Gender</SelectItem>
                <SelectItem value="Mixed">Mixed</SelectItem>
                <SelectItem value="Accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Swaps Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>From User</TableHead>
                  <TableHead>To User</TableHead>
                  <TableHead>Items Exchanged</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Request Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSwaps.map((swap) => (
                  <TableRow key={swap.id}>
                    <TableCell>
                      <div className="font-medium">{swap.fromUser}</div>
                      <div className="text-sm text-muted-foreground">{swap.fromItem}</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{swap.toUser}</div>
                      <div className="text-sm text-muted-foreground">{swap.toItem}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{swap.fromItem}</span>
                        <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{swap.toItem}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{swap.category}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(swap.requestDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(swap.status)}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-primary">
                            <Check className="mr-2 h-4 w-4" />
                            Approve Swap
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <X className="mr-2 h-4 w-4" />
                            Cancel Swap
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}