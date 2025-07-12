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
  Download,
  Edit,
  Trash2,
  UserX,
  Shield,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  }
];

export function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);
  const [users, setUsers] = useState(mockUsers);
  const { toast } = useToast();

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "default",
      banned: "destructive",
      warning: "secondary",
      new: "outline"
    } as const;
    
    return (
      <Badge variant={variants[status as keyof typeof variants] || "secondary"}>
        {status}
      </Badge>
    );
  };

  const getReputationColor = (reputation: number) => {
    if (reputation >= 4.5) return "text-success";
    if (reputation >= 4.0) return "text-primary";
    if (reputation >= 3.0) return "text-warning";
    return "text-destructive";
  };

  const handleStatusChange = (userId: number, newStatus: string) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
    
    const user = users.find(u => u.id === userId);
    toast({
      title: "Status Updated",
      description: `${user?.name}'s status has been changed to ${newStatus}`,
    });
  };

  const handleBanUser = (userId: number) => {
    handleStatusChange(userId, "banned");
  };

  const handleUnbanUser = (userId: number) => {
    handleStatusChange(userId, "active");
  };

  const handleWarnUser = (userId: number) => {
    handleStatusChange(userId, "warning");
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
    const user = users.find(u => u.id === userId);
    toast({
      title: "User Removed",
      description: `${user?.name} has been permanently removed from the platform`,
      variant: "destructive",
    });
  };

  const handleViewProfile = (user: typeof mockUsers[0]) => {
    setSelectedUser(user);
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
              <Users className="h-5 w-5 text-success" />
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
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-card border border-border">
                          <DropdownMenuItem onClick={() => handleViewProfile(user)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleWarnUser(user.id)}>
                            <AlertTriangle className="mr-2 h-4 w-4" />
                            Warn User
                          </DropdownMenuItem>
                          {user.status === "banned" ? (
                            <DropdownMenuItem onClick={() => handleUnbanUser(user.id)}>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Unban User
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem onClick={() => handleBanUser(user.id)} className="text-destructive">
                              <Ban className="mr-2 h-4 w-4" />
                              Ban User
                            </DropdownMenuItem>
                          )}
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete Permanently
                              </DropdownMenuItem>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This will permanently delete {user.name}'s 
                                  account and remove all their data from our servers.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleDeleteUser(user.id)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
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

      {/* User Profile Dialog */}
      <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedUser?.avatar ? (
                <img 
                  src={selectedUser.avatar} 
                  alt={selectedUser.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold">{selectedUser?.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedUser?.email}</p>
              </div>
            </DialogTitle>
          </DialogHeader>
          
          {selectedUser && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Status</Label>
                  <div className="mt-1">
                    {getStatusBadge(selectedUser.status)}
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Reputation</Label>
                  <p className={`mt-1 font-semibold ${getReputationColor(selectedUser.reputation)}`}>
                    {selectedUser.reputation}/5.0
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Join Date</Label>
                  <p className="mt-1 text-sm">{selectedUser.joinDate}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Total Swaps</Label>
                  <p className="mt-1 text-sm font-semibold">{selectedUser.swapCount}</p>
                </div>
                <div className="col-span-2">
                  <Label className="text-sm font-medium">Location</Label>
                  <p className="mt-1 text-sm">{selectedUser.location}</p>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-medium">Admin Actions</Label>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleWarnUser(selectedUser.id)}
                  >
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Issue Warning
                  </Button>
                  
                  {selectedUser.status === "banned" ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleUnbanUser(selectedUser.id)}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Unban User
                    </Button>
                  ) : (
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleBanUser(selectedUser.id)}
                    >
                      <Ban className="h-4 w-4 mr-2" />
                      Ban User
                    </Button>
                  )}
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Permanently
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete User Account</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will permanently delete {selectedUser.name}'s account and all associated data. 
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction 
                          onClick={() => {
                            handleDeleteUser(selectedUser.id);
                            setSelectedUser(null);
                          }}
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                          Delete Account
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">Admin Notes</Label>
                <Textarea 
                  placeholder="Add notes about this user..." 
                  className="mt-1"
                  rows={3}
                />
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedUser(null)}>
              Close
            </Button>
            <Button>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}