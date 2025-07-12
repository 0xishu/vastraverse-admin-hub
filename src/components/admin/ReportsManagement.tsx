import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  AlertTriangle, 
  Search, 
  Filter,
  MoreHorizontal,
  Eye,
  X,
  Check,
  Ban,
  MessageSquare,
  Flag
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

const mockReports = [
  {
    id: 1,
    reportedBy: "Rahul Mehta",
    reportedUser: "Vikas Yadav",
    reportedItem: "Fake Designer Shirt",
    reason: "Counterfeit Item",
    description: "This appears to be a fake designer item being sold as authentic",
    reportDate: "2024-03-15",
    status: "pending",
    priority: "high"
  },
  {
    id: 2,
    reportedBy: "Ananya Iyer",
    reportedUser: "Harshit Jain",
    reportedItem: "Profile Behavior",
    reason: "Inappropriate Behavior",
    description: "User is using inappropriate language in messages",
    reportDate: "2024-03-14",
    status: "investigating",
    priority: "medium"
  },
  {
    id: 3,
    reportedBy: "Mehak Kaur",
    reportedUser: "Dev Sharma",
    reportedItem: "Torn Jeans",
    reason: "Item Not as Described",
    description: "Item condition was much worse than advertised",
    reportDate: "2024-03-13",
    status: "resolved",
    priority: "low"
  },
  {
    id: 4,
    reportedBy: "Nikita Sharma",
    reportedUser: "Deepak Malhotra",
    reportedItem: "Multiple Spam Listings",
    reason: "Spam Content",
    description: "User is posting duplicate items and spamming the platform",
    reportDate: "2024-03-12",
    status: "pending",
    priority: "high"
  },
  {
    id: 5,
    reportedBy: "Kabir Nanda",
    reportedUser: "Mohit Rao",
    reportedItem: "Offensive Profile Picture",
    reason: "Inappropriate Content",
    description: "Profile picture contains inappropriate imagery",
    reportDate: "2024-03-11",
    status: "dismissed",
    priority: "medium"
  },
  {
    id: 6,
    reportedBy: "Shruti Menon",
    reportedUser: "Kartik Menon",
    reportedItem: "No-show for swap",
    reason: "Failed Transaction",
    description: "User agreed to swap but never showed up for exchange",
    reportDate: "2024-03-10",
    status: "investigating",
    priority: "medium"
  },
  {
    id: 7,
    reportedBy: "Kritika Ghosh",
    reportedUser: "Aman Lakhani",
    reportedItem: "Damaged Sneakers",
    reason: "Item Damaged",
    description: "Received shoes with significant wear not mentioned in listing",
    reportDate: "2024-03-09",
    status: "pending",
    priority: "medium"
  },
  {
    id: 8,
    reportedBy: "Rupal Dave",
    reportedUser: "Pranav Vora",
    reportedItem: "Harassment Messages",
    reason: "User Harassment",
    description: "User sending inappropriate private messages repeatedly",
    reportDate: "2024-03-08",
    status: "investigating",
    priority: "high"
  },
  {
    id: 9,
    reportedBy: "Sneha Chatterjee",
    reportedUser: "Lavanya Singh",
    reportedItem: "Wrong Size Listing",
    reason: "Misleading Information",
    description: "Item listed as Medium but received Large size",
    reportDate: "2024-03-07",
    status: "resolved",
    priority: "low"
  },
  {
    id: 10,
    reportedBy: "Tushar Rathi",
    reportedUser: "Alisha Fernandes",
    reportedItem: "Payment Issue",
    reason: "Transaction Problem",
    description: "User demanding additional payment after agreeing to swap",
    reportDate: "2024-03-06",
    status: "pending",
    priority: "high"
  },
  {
    id: 11,
    reportedBy: "Farhan Shaikh",
    reportedUser: "Isha Reddy",
    reportedItem: "Duplicate Listings",
    reason: "Spam Content",
    description: "Same item posted multiple times with different descriptions",
    reportDate: "2024-03-05",
    status: "investigating",
    priority: "medium"
  },
  {
    id: 12,
    reportedBy: "Priya Bhattacharya",
    reportedUser: "Neeraj Kapoor",
    reportedItem: "Fake Brand Tag",
    reason: "Counterfeit Item",
    description: "Brand tag appears to be fake or altered",
    reportDate: "2024-03-04",
    status: "pending",
    priority: "high"
  },
  {
    id: 13,
    reportedBy: "Sanya Roy",
    reportedUser: "Vedant Kulkarni",
    reportedItem: "Rude Communication",
    reason: "Inappropriate Behavior",
    description: "User was extremely rude during swap negotiation",
    reportDate: "2024-03-03",
    status: "dismissed",
    priority: "low"
  },
  {
    id: 14,
    reportedBy: "Pooja Patel",
    reportedUser: "Arjun Dey",
    reportedItem: "Item Not Delivered",
    reason: "Failed Transaction",
    description: "User confirmed swap but never delivered the promised item",
    reportDate: "2024-03-02",
    status: "investigating",
    priority: "high"
  },
  {
    id: 15,
    reportedBy: "Simran Ahuja",
    reportedUser: "Yash Agarwal",
    reportedItem: "Poor Quality Photos",
    reason: "Misleading Images",
    description: "Photos don't accurately represent the actual item condition",
    reportDate: "2024-03-01",
    status: "resolved",
    priority: "medium"
  },
  {
    id: 16,
    reportedBy: "Trisha Nambiar",
    reportedUser: "Sahil Rastogi",
    reportedItem: "Late Response",
    reason: "Communication Issue",
    description: "User takes too long to respond and delays swap process",
    reportDate: "2024-02-28",
    status: "dismissed",
    priority: "low"
  },
  {
    id: 17,
    reportedBy: "Nidhi Chauhan",
    reportedUser: "Manav Shetty",
    reportedItem: "Wrong Color",
    reason: "Item Not as Described",
    description: "Item color is completely different from what was shown",
    reportDate: "2024-02-27",
    status: "pending",
    priority: "medium"
  },
  {
    id: 18,
    reportedBy: "Ria Sen",
    reportedUser: "Sana Khan",
    reportedItem: "Stained Clothing",
    reason: "Item Condition",
    description: "Item has permanent stains not mentioned in description",
    reportDate: "2024-02-26",
    status: "investigating",
    priority: "medium"
  },
  {
    id: 19,
    reportedBy: "Abhishek Das",
    reportedUser: "Avni Solanki",
    reportedItem: "Fake Profile",
    reason: "Account Issue",
    description: "Suspect this is a fake profile with stolen photos",
    reportDate: "2024-02-25",
    status: "pending",
    priority: "high"
  },
  {
    id: 20,
    reportedBy: "Swati Mishra",
    reportedUser: "Rehan Siddiqui",
    reportedItem: "Broken Zipper",
    reason: "Item Damaged",
    description: "Jacket zipper is completely broken, making it unwearable",
    reportDate: "2024-02-24",
    status: "resolved",
    priority: "medium"
  }
];

export function ReportsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const filteredReports = mockReports.filter(report => {
    const matchesSearch = report.reportedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.reportedUser.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.reason.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || report.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || report.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusBadge = (status: string) => {
    const config = {
      pending: { variant: "secondary" as const, className: "bg-warning text-warning-foreground" },
      investigating: { variant: "default" as const, className: "bg-primary text-primary-foreground" },
      resolved: { variant: "default" as const, className: "bg-primary text-primary-foreground" },
      dismissed: { variant: "secondary" as const, className: "bg-muted" }
    };
    
    const { variant, className } = config[status as keyof typeof config] || config.pending;
    
    return (
      <Badge variant={variant} className={className}>
        {status}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const config = {
      high: { variant: "destructive" as const, className: "" },
      medium: { variant: "secondary" as const, className: "bg-warning text-warning-foreground" },
      low: { variant: "outline" as const, className: "" }
    };
    
    const { variant, className } = config[priority as keyof typeof config] || config.medium;
    
    return (
      <Badge variant={variant} className={className}>
        {priority}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Abuse</h1>
          <p className="text-muted-foreground">Review and manage user reports and content moderation.</p>
        </div>
        <Button className="gap-2">
          <Flag className="h-4 w-4" />
          Priority Queue
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-muted-foreground">Pending Reports</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Under Investigation</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">89</p>
                <p className="text-sm text-muted-foreground">Resolved This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Flag className="h-5 w-5 text-destructive" />
              <div>
                <p className="text-2xl font-bold">6</p>
                <p className="text-sm text-muted-foreground">High Priority</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Reports Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search by user or reason..." 
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
                <SelectItem value="investigating">Investigating</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="dismissed">Dismissed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Reports Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reported User</TableHead>
                  <TableHead>Reported By</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Item/Subject</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell>
                      <div className="font-medium">{report.reportedUser}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-muted-foreground">{report.reportedBy}</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{report.reason}</div>
                      <div className="text-sm text-muted-foreground truncate max-w-48">
                        {report.description}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">{report.reportedItem}</span>
                    </TableCell>
                    <TableCell>
                      {getPriorityBadge(report.priority)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(report.reportDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(report.status)}
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
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Contact Reporter
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-primary">
                            <Check className="mr-2 h-4 w-4" />
                            Mark Resolved
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Ban className="mr-2 h-4 w-4" />
                            Ban Reported User
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-muted-foreground">
                            <X className="mr-2 h-4 w-4" />
                            Dismiss Report
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