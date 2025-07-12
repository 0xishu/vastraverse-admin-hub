import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Search, 
  Filter,
  MoreHorizontal,
  Eye,
  AlertTriangle,
  Ban,
  UserCheck,
  Download
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

const mockUsers = [
  {
    id: 1,
    name: "Ananya Iyer",
    email: "ananya.iyer@email.com",
    joinDate: "2024-01-15",
    swapCount: 23,
    status: "active",
    reputation: 4.8,
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Rahul Mehta",
    email: "rahul.mehta@email.com",
    joinDate: "2024-02-03",
    swapCount: 18,
    status: "active",
    reputation: 4.6,
    location: "Delhi, India",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Mehak Kaur", 
    email: "mehak.kaur@email.com",
    joinDate: "2024-01-28",
    swapCount: 31,
    status: "warning",
    reputation: 4.2,
    location: "Chandigarh, India",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Aarav Desai",
    email: "aarav.desai@email.com",
    joinDate: "2024-03-10",
    swapCount: 8,
    status: "banned",
    reputation: 2.1,
    location: "Ahmedabad, India",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Nikita Sharma",
    email: "nikita.sharma@email.com",
    joinDate: "2024-03-15",
    swapCount: 0,
    status: "new",
    reputation: 0,
    location: "Jaipur, India",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Kabir Nanda",
    email: "kabir.nanda@email.com",
    joinDate: "2024-02-20",
    swapCount: 15,
    status: "active",
    reputation: 4.3,
    location: "Bangalore, India",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 7,
    name: "Shruti Menon",
    email: "shruti.menon@email.com",
    joinDate: "2024-01-10",
    swapCount: 27,
    status: "active",
    reputation: 4.7,
    location: "Kochi, India",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 8,
    name: "Zoya Qureshi",
    email: "zoya.qureshi@email.com",
    joinDate: "2024-02-14",
    swapCount: 12,
    status: "active",
    reputation: 4.4,
    location: "Hyderabad, India",
    avatar: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 9,
    name: "Rohan Verma",
    email: "rohan.verma@email.com",
    joinDate: "2024-03-05",
    swapCount: 9,
    status: "active",
    reputation: 4.1,
    location: "Lucknow, India",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 10,
    name: "Aisha Siddiqui",
    email: "aisha.siddiqui@email.com",
    joinDate: "2024-01-25",
    swapCount: 21,
    status: "active",
    reputation: 4.6,
    location: "Pune, India",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 11,
    name: "Aditya Joshi",
    email: "aditya.joshi@email.com",
    joinDate: "2024-02-08",
    swapCount: 16,
    status: "active",
    reputation: 4.5,
    location: "Indore, India",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 12,
    name: "Tanya Bansal",
    email: "tanya.bansal@email.com",
    joinDate: "2024-03-12",
    swapCount: 7,
    status: "active",
    reputation: 4.2,
    location: "Gurgaon, India",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 13,
    name: "Farhan Shaikh",
    email: "farhan.shaikh@email.com",
    joinDate: "2024-01-18",
    swapCount: 25,
    status: "active",
    reputation: 4.8,
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 14,
    name: "Isha Reddy",
    email: "isha.reddy@email.com",
    joinDate: "2024-02-22",
    swapCount: 14,
    status: "active",
    reputation: 4.4,
    location: "Chennai, India",
    avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 15,
    name: "Deepak Malhotra",
    email: "deepak.malhotra@email.com",
    joinDate: "2024-03-08",
    swapCount: 11,
    status: "warning",
    reputation: 3.9,
    location: "Delhi, India",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 16,
    name: "Priya Bhattacharya",
    email: "priya.bhattacharya@email.com",
    joinDate: "2024-01-30",
    swapCount: 19,
    status: "active",
    reputation: 4.5,
    location: "Kolkata, India",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 17,
    name: "Neeraj Kapoor",
    email: "neeraj.kapoor@email.com",
    joinDate: "2024-02-16",
    swapCount: 13,
    status: "active",
    reputation: 4.3,
    location: "Chandigarh, India",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 18,
    name: "Sanya Roy",
    email: "sanya.roy@email.com",
    joinDate: "2024-03-01",
    swapCount: 6,
    status: "new",
    reputation: 4.0,
    location: "Bhubaneswar, India",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 19,
    name: "Vedant Kulkarni",
    email: "vedant.kulkarni@email.com",
    joinDate: "2024-01-22",
    swapCount: 22,
    status: "active",
    reputation: 4.7,
    location: "Pune, India",
    avatar: "https://images.unsplash.com/photo-1539571696285-e7d0a5b36180?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 20,
    name: "Pooja Patel",
    email: "pooja.patel@email.com",
    joinDate: "2024-02-12",
    swapCount: 17,
    status: "active",
    reputation: 4.6,
    location: "Ahmedabad, India",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 21,
    name: "Arjun Dey",
    email: "arjun.dey@email.com",
    joinDate: "2024-03-18",
    swapCount: 5,
    status: "new",
    reputation: 3.8,
    location: "Kolkata, India",
    avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 22,
    name: "Simran Ahuja",
    email: "simran.ahuja@email.com",
    joinDate: "2024-01-12",
    swapCount: 28,
    status: "active",
    reputation: 4.9,
    location: "Amritsar, India",
    avatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 23,
    name: "Yash Agarwal",
    email: "yash.agarwal@email.com",
    joinDate: "2024-02-25",
    swapCount: 10,
    status: "active",
    reputation: 4.2,
    location: "Agra, India",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 24,
    name: "Trisha Nambiar",
    email: "trisha.nambiar@email.com",
    joinDate: "2024-03-14",
    swapCount: 8,
    status: "active",
    reputation: 4.1,
    location: "Kochi, India",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 25,
    name: "Sahil Rastogi",
    email: "sahil.rastogi@email.com",
    joinDate: "2024-01-08",
    swapCount: 24,
    status: "active",
    reputation: 4.8,
    location: "Meerut, India",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 26,
    name: "Nidhi Chauhan",
    email: "nidhi.chauhan@email.com",
    joinDate: "2024-02-18",
    swapCount: 15,
    status: "active",
    reputation: 4.4,
    location: "Dehradun, India"
  },
  {
    id: 27,
    name: "Manav Shetty",
    email: "manav.shetty@email.com",
    joinDate: "2024-03-06",
    swapCount: 9,
    status: "active",
    reputation: 4.0,
    location: "Mangalore, India"
  },
  {
    id: 28,
    name: "Ria Sen",
    email: "ria.sen@email.com",
    joinDate: "2024-01-26",
    swapCount: 20,
    status: "active",
    reputation: 4.5,
    location: "Kolkata, India"
  },
  {
    id: 29,
    name: "Harshit Jain",
    email: "harshit.jain@email.com",
    joinDate: "2024-02-09",
    swapCount: 16,
    status: "warning",
    reputation: 3.7,
    location: "Indore, India"
  },
  {
    id: 30,
    name: "Sana Khan",
    email: "sana.khan@email.com",
    joinDate: "2024-03-11",
    swapCount: 7,
    status: "active",
    reputation: 4.2,
    location: "Bhopal, India"
  },
  {
    id: 31,
    name: "Abhishek Das",
    email: "abhishek.das@email.com",
    joinDate: "2024-01-19",
    swapCount: 23,
    status: "active",
    reputation: 4.7,
    location: "Guwahati, India"
  },
  {
    id: 32,
    name: "Avni Solanki",
    email: "avni.solanki@email.com",
    joinDate: "2024-02-28",
    swapCount: 11,
    status: "active",
    reputation: 4.3,
    location: "Rajkot, India"
  },
  {
    id: 33,
    name: "Kartik Menon",
    email: "kartik.menon@email.com",
    joinDate: "2024-03-16",
    swapCount: 4,
    status: "new",
    reputation: 3.9,
    location: "Trivandrum, India"
  },
  {
    id: 34,
    name: "Swati Mishra",
    email: "swati.mishra@email.com",
    joinDate: "2024-01-14",
    swapCount: 26,
    status: "active",
    reputation: 4.8,
    location: "Bhopal, India"
  },
  {
    id: 35,
    name: "Rehan Siddiqui",
    email: "rehan.siddiqui@email.com",
    joinDate: "2024-02-21",
    swapCount: 14,
    status: "active",
    reputation: 4.4,
    location: "Lucknow, India"
  },
  {
    id: 36,
    name: "Divya Gupta",
    email: "divya.gupta@email.com",
    joinDate: "2024-03-07",
    swapCount: 8,
    status: "active",
    reputation: 4.1,
    location: "Noida, India"
  },
  {
    id: 37,
    name: "Karan Sethi",
    email: "karan.sethi@email.com",
    joinDate: "2024-01-31",
    swapCount: 18,
    status: "active",
    reputation: 4.5,
    location: "Ludhiana, India"
  },
  {
    id: 38,
    name: "Anjali Rane",
    email: "anjali.rane@email.com",
    joinDate: "2024-02-13",
    swapCount: 12,
    status: "active",
    reputation: 4.3,
    location: "Nashik, India"
  },
  {
    id: 39,
    name: "Mohit Rao",
    email: "mohit.rao@email.com",
    joinDate: "2024-03-19",
    swapCount: 3,
    status: "new",
    reputation: 3.6,
    location: "Mysore, India"
  },
  {
    id: 40,
    name: "Natasha Pillai",
    email: "natasha.pillai@email.com",
    joinDate: "2024-01-16",
    swapCount: 25,
    status: "active",
    reputation: 4.8,
    location: "Thiruvananthapuram, India"
  },
  {
    id: 41,
    name: "Vikas Yadav",
    email: "vikas.yadav@email.com",
    joinDate: "2024-02-24",
    swapCount: 13,
    status: "banned",
    reputation: 2.8,
    location: "Ghaziabad, India"
  },
  {
    id: 42,
    name: "Kritika Ghosh",
    email: "kritika.ghosh@email.com",
    joinDate: "2024-03-02",
    swapCount: 9,
    status: "active",
    reputation: 4.0,
    location: "Siliguri, India"
  },
  {
    id: 43,
    name: "Aman Lakhani",
    email: "aman.lakhani@email.com",
    joinDate: "2024-01-27",
    swapCount: 21,
    status: "active",
    reputation: 4.6,
    location: "Udaipur, India"
  },
  {
    id: 44,
    name: "Rupal Dave",
    email: "rupal.dave@email.com",
    joinDate: "2024-02-15",
    swapCount: 16,
    status: "active",
    reputation: 4.4,
    location: "Vadodara, India"
  },
  {
    id: 45,
    name: "Pranav Vora",
    email: "pranav.vora@email.com",
    joinDate: "2024-03-13",
    swapCount: 6,
    status: "active",
    reputation: 4.1,
    location: "Surat, India"
  },
  {
    id: 46,
    name: "Sneha Chatterjee",
    email: "sneha.chatterjee@email.com",
    joinDate: "2024-01-21",
    swapCount: 22,
    status: "active",
    reputation: 4.7,
    location: "Durgapur, India"
  },
  {
    id: 47,
    name: "Dev Sharma",
    email: "dev.sharma@email.com",
    joinDate: "2024-02-26",
    swapCount: 10,
    status: "warning",
    reputation: 3.8,
    location: "Shimla, India"
  },
  {
    id: 48,
    name: "Lavanya Singh",
    email: "lavanya.singh@email.com",
    joinDate: "2024-03-17",
    swapCount: 5,
    status: "new",
    reputation: 3.9,
    location: "Ranchi, India"
  },
  {
    id: 49,
    name: "Tushar Rathi",
    email: "tushar.rathi@email.com",
    joinDate: "2024-01-29",
    swapCount: 19,
    status: "active",
    reputation: 4.5,
    location: "Jodhpur, India"
  },
  {
    id: 50,
    name: "Alisha Fernandes",
    email: "alisha.fernandes@email.com",
    joinDate: "2024-02-11",
    swapCount: 17,
    status: "active",
    reputation: 4.6,
    location: "Goa, India"
  }
];

export function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const config = {
      active: { variant: "default" as const, className: "bg-primary text-primary-foreground" },
      warning: { variant: "secondary" as const, className: "bg-warning text-warning-foreground" },
      banned: { variant: "destructive" as const, className: "" },
      new: { variant: "secondary" as const, className: "bg-eco-100 text-foreground" }
    };
    
    const { variant, className } = config[status as keyof typeof config] || config.active;
    
    return (
      <Badge variant={variant} className={className}>
        {status}
      </Badge>
    );
  };

  const getReputationColor = (reputation: number) => {
    if (reputation >= 4.5) return "text-primary";
    if (reputation >= 3.5) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground">Manage platform users, monitor activity, and moderate accounts.</p>
        </div>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Export Users
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">12,543</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-eco-500" />
              <div>
                <p className="text-2xl font-bold">247</p>
                <p className="text-sm text-muted-foreground">New This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <div>
                <p className="text-2xl font-bold">18</p>
                <p className="text-sm text-muted-foreground">Flagged Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Ban className="h-5 w-5 text-destructive" />
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-muted-foreground">Banned Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>User Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search by name or email..." 
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
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="new">New Users</SelectItem>
                <SelectItem value="warning">Flagged</SelectItem>
                <SelectItem value="banned">Banned</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Users Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Swaps</TableHead>
                  <TableHead>Reputation</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        {user.avatar ? (
                          <img 
                            src={user.avatar} 
                            alt={user.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground font-medium">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{user.swapCount}</span>
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${getReputationColor(user.reputation)}`}>
                        {user.reputation > 0 ? user.reputation.toFixed(1) : 'New'}
                      </span>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(user.status)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {user.location}
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
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <AlertTriangle className="mr-2 h-4 w-4" />
                            Warn User
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Ban className="mr-2 h-4 w-4" />
                            {user.status === "banned" ? "Unban User" : "Ban User"}
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