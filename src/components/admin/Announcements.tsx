import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Megaphone, 
  Search, 
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Send,
  Clock,
  Users,
  Calendar,
  Plus
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const mockAnnouncements = [
  {
    id: 1,
    title: "New Size Filter Feature Released",
    content: "We've added advanced size filtering to help you find the perfect fit for your clothing swaps!",
    targetAudience: "All Users",
    status: "sent",
    scheduledDate: "2024-03-15",
    sentDate: "2024-03-15",
    recipientCount: 1247,
    type: "feature_update"
  },
  {
    id: 2,
    title: "Weekly Sustainability Challenge",
    content: "Join our weekly challenge to swap at least 3 items and earn exclusive eco-friendly badges!",
    targetAudience: "Active Users",
    status: "scheduled",
    scheduledDate: "2024-03-18",
    sentDate: null,
    recipientCount: 892,
    type: "challenge"
  },
  {
    id: 3,
    title: "Platform Maintenance Notice",
    content: "VastraVerse will undergo scheduled maintenance on March 20th from 2 AM to 4 AM IST. Please plan your swaps accordingly.",
    targetAudience: "All Users",
    status: "draft",
    scheduledDate: "2024-03-19",
    sentDate: null,
    recipientCount: 1247,
    type: "maintenance"
  },
  {
    id: 4,
    title: "Top Swappers of the Month",
    content: "Congratulations to our top contributors! Check out who made the biggest impact in sustainable fashion this month.",
    targetAudience: "Community",
    status: "sent",
    scheduledDate: "2024-03-01",
    sentDate: "2024-03-01",
    recipientCount: 1247,
    type: "community"
  },
  {
    id: 5,
    title: "Quality Guidelines Update",
    content: "We've updated our quality guidelines to ensure better swap experiences. Please review the new standards before listing items.",
    targetAudience: "All Users",
    status: "scheduled",
    scheduledDate: "2024-03-20",
    sentDate: null,
    recipientCount: 1247,
    type: "policy"
  }
];

export function Announcements() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredAnnouncements = mockAnnouncements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || announcement.status === statusFilter;
    const matchesType = typeFilter === "all" || announcement.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusBadge = (status: string) => {
    const config = {
      draft: { variant: "secondary" as const, className: "bg-muted" },
      scheduled: { variant: "secondary" as const, className: "bg-warning text-warning-foreground" },
      sent: { variant: "default" as const, className: "bg-primary text-primary-foreground" }
    };
    
    const { variant, className } = config[status as keyof typeof config] || config.draft;
    
    return (
      <Badge variant={variant} className={className}>
        {status}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    const labels = {
      feature_update: "Feature Update",
      challenge: "Challenge",
      maintenance: "Maintenance", 
      community: "Community",
      policy: "Policy"
    };
    
    return (
      <Badge variant="outline">
        {labels[type as keyof typeof labels] || type}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Announcements</h1>
          <p className="text-muted-foreground">Create and manage platform-wide announcements and notifications.</p>
        </div>
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create Announcement
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Announcement</DialogTitle>
              <DialogDescription>
                Compose a new announcement to send to your users.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Announcement Title</Label>
                <Input id="title" placeholder="Enter announcement title..." />
              </div>
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea 
                  id="content" 
                  placeholder="Write your announcement content here..." 
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="audience">Target Audience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="active">Active Users</SelectItem>
                      <SelectItem value="new">New Users</SelectItem>
                      <SelectItem value="community">Community Members</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="type">Announcement Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="feature_update">Feature Update</SelectItem>
                      <SelectItem value="challenge">Challenge</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="community">Community</SelectItem>
                      <SelectItem value="policy">Policy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="schedule">Schedule Date (Optional)</Label>
                <Input id="schedule" type="datetime-local" />
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="flex-1">
                  <Send className="mr-2 h-4 w-4" />
                  Send Now
                </Button>
                <Button variant="outline" className="flex-1">
                  <Clock className="mr-2 h-4 w-4" />
                  Save as Draft
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-muted-foreground">Sent This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-warning" />
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Scheduled</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-eco-500" />
              <div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-muted-foreground">Total Recipients</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Megaphone className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">89%</p>
                <p className="text-sm text-muted-foreground">Engagement Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Announcement Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search announcements..." 
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
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="feature_update">Feature Update</SelectItem>
                <SelectItem value="challenge">Challenge</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="community">Community</SelectItem>
                <SelectItem value="policy">Policy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Announcements Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Target Audience</TableHead>
                  <TableHead>Recipients</TableHead>
                  <TableHead>Scheduled Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAnnouncements.map((announcement) => (
                  <TableRow key={announcement.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{announcement.title}</div>
                        <div className="text-sm text-muted-foreground truncate max-w-64">
                          {announcement.content}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getTypeBadge(announcement.type)}
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{announcement.targetAudience}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{announcement.recipientCount.toLocaleString()}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(announcement.scheduledDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(announcement.status)}
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
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          {announcement.status === "draft" && (
                            <DropdownMenuItem className="text-primary">
                              <Send className="mr-2 h-4 w-4" />
                              Send Now
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
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