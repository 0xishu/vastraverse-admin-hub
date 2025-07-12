import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Package, 
  Search, 
  Filter,
  MoreHorizontal,
  Eye,
  Check,
  X,
  AlertTriangle,
  Clock,
  Shirt
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

const mockListings = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    category: "Women",
    condition: "Good",
    size: "M",
    brand: "Levi's",
    uploader: "Ananya Iyer",
    uploadDate: "2024-03-15",
    status: "pending",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    title: "Formal Black Blazer",
    category: "Men",
    condition: "Excellent",
    size: "L",
    brand: "H&M",
    uploader: "Rahul Mehta",
    uploadDate: "2024-03-14",
    status: "approved",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    title: "Floral Summer Dress",
    category: "Women",
    condition: "Fair",
    size: "S",
    brand: "Zara",
    uploader: "Mehak Kaur",
    uploadDate: "2024-03-13",
    status: "rejected",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    title: "Kids Cotton T-Shirt",
    category: "Kids",
    condition: "Good",
    size: "8-10Y",
    brand: "Gap Kids",
    uploader: "Aarav Desai",
    uploadDate: "2024-03-12",
    status: "pending",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=100&h=100&fit=crop"
  },
  {
    id: 5,
    title: "Casual Jeans",
    category: "Men",
    condition: "Excellent",
    size: "32",
    brand: "Wrangler",
    uploader: "Nikita Sharma",
    uploadDate: "2024-03-11",
    status: "approved",
    image: "https://images.unsplash.com/photo-1542272454315-7ad9ed5aa2ad?w=100&h=100&fit=crop"
  },
  {
    id: 6,
    title: "Winter Wool Sweater",
    category: "Women",
    condition: "Good",
    size: "L",
    brand: "Uniqlo",
    uploader: "Kabir Nanda",
    uploadDate: "2024-03-10",
    status: "flagged",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=100&h=100&fit=crop"
  }
];

export function ItemListings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredListings = mockListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.uploader.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || listing.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || listing.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    const config = {
      pending: { variant: "secondary" as const, className: "bg-warning text-warning-foreground" },
      approved: { variant: "default" as const, className: "bg-primary text-primary-foreground" },
      rejected: { variant: "destructive" as const, className: "" },
      flagged: { variant: "destructive" as const, className: "bg-destructive/90" }
    };
    
    const { variant, className } = config[status as keyof typeof config] || config.pending;
    
    return (
      <Badge variant={variant} className={className}>
        {status}
      </Badge>
    );
  };

  const getConditionColor = (condition: string) => {
    if (condition === "Excellent") return "text-primary";
    if (condition === "Good") return "text-eco-600";
    return "text-warning";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Item Listings</h1>
          <p className="text-muted-foreground">Review and moderate clothing listings from users.</p>
        </div>
        <Button className="gap-2">
          <Package className="h-4 w-4" />
          Bulk Actions
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-warning" />
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-muted-foreground">Pending Review</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-muted-foreground">Approved</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <X className="h-5 w-5 text-destructive" />
              <div>
                <p className="text-2xl font-bold">89</p>
                <p className="text-sm text-muted-foreground">Rejected</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Flagged</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Listing Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search by title or uploader..." 
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
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="flagged">Flagged</SelectItem>
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
                <SelectItem value="Kids">Kids</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Listings Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Uploader</TableHead>
                  <TableHead>Upload Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredListings.map((listing) => (
                  <TableRow key={listing.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img 
                          src={listing.image} 
                          alt={listing.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-medium">{listing.title}</div>
                          <div className="text-sm text-muted-foreground">{listing.brand}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{listing.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${getConditionColor(listing.condition)}`}>
                        {listing.condition}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{listing.size}</span>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {listing.uploader}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(listing.uploadDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(listing.status)}
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
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <X className="mr-2 h-4 w-4" />
                            Reject
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <AlertTriangle className="mr-2 h-4 w-4" />
                            Flag as Spam
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