import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  Search, 
  Filter,
  MoreHorizontal,
  Eye,
  Reply,
  Star,
  ThumbsUp,
  ThumbsDown,
  Check
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

const mockFeedback = [
  {
    id: 1,
    user: "Ananya Iyer",
    rating: 5,
    feedback: "Amazing platform! Love the sustainable concept and easy swapping process.",
    category: "Platform Experience",
    date: "2024-03-15",
    status: "pending",
    sentiment: "positive"
  },
  {
    id: 2,
    user: "Rahul Mehta",
    rating: 2,
    feedback: "Item quality verification needs improvement. Received item not as described.",
    category: "Quality Control",
    date: "2024-03-14",
    status: "pending",
    sentiment: "negative"
  },
  {
    id: 3,
    user: "Mehak Kaur",
    rating: 4,
    feedback: "Good app overall, but needs better search filters for clothing sizes.",
    category: "Feature Request",
    date: "2024-03-13",
    status: "responded",
    sentiment: "positive"
  },
  {
    id: 4,
    user: "Nikita Sharma",
    rating: 3,
    feedback: "Decent experience but delivery coordination could be better organized.",
    category: "Logistics",
    date: "2024-03-12",
    status: "pending",
    sentiment: "neutral"
  },
  {
    id: 5,
    user: "Kabir Nanda",
    rating: 5,
    feedback: "Excellent concept! Saved money and helped environment. Keep it up!",
    category: "Platform Experience",
    date: "2024-03-11",
    status: "resolved",
    sentiment: "positive"
  },
  {
    id: 6,
    user: "Shruti Menon",
    rating: 1,
    feedback: "Very disappointed with the swap process. User was rude and item was damaged.",
    category: "User Behavior",
    date: "2024-03-10",
    status: "escalated",
    sentiment: "negative"
  },
  {
    id: 7,
    user: "Farhan Shaikh",
    rating: 4,
    feedback: "Great community of fashion enthusiasts. Found some amazing vintage pieces!",
    category: "Community",
    date: "2024-03-09",
    status: "responded",
    sentiment: "positive"
  },
  {
    id: 8,
    user: "Isha Reddy",
    rating: 3,
    feedback: "App interface could be more intuitive. Sometimes hard to navigate categories.",
    category: "User Interface",
    date: "2024-03-08",
    status: "pending",
    sentiment: "neutral"
  },
  {
    id: 9,
    user: "Deepak Malhotra",
    rating: 5,
    feedback: "Love how this promotes sustainable fashion. Swapped my entire wardrobe!",
    category: "Sustainability",
    date: "2024-03-07",
    status: "resolved",
    sentiment: "positive"
  },
  {
    id: 10,
    user: "Priya Bhattacharya",
    rating: 2,
    feedback: "Had issues with user verification. Some profiles seem fake.",
    category: "Security",
    date: "2024-03-06",
    status: "escalated",
    sentiment: "negative"
  },
  {
    id: 11,
    user: "Neeraj Kapoor",
    rating: 4,
    feedback: "Really helpful for finding rare designer pieces. Recommendation system works well.",
    category: "Discovery",
    date: "2024-03-05",
    status: "responded",
    sentiment: "positive"
  },
  {
    id: 12,
    user: "Sanya Roy",
    rating: 3,
    feedback: "Notification system needs work. Often miss important swap updates.",
    category: "Notifications",
    date: "2024-03-04",
    status: "pending",
    sentiment: "neutral"
  },
  {
    id: 13,
    user: "Vedant Kulkarni",
    rating: 5,
    feedback: "Perfect for college students! Affordable way to refresh wardrobe regularly.",
    category: "Value Proposition",
    date: "2024-03-03",
    status: "resolved",
    sentiment: "positive"
  },
  {
    id: 14,
    user: "Pooja Patel",
    rating: 1,
    feedback: "Customer support is very slow to respond to complaints and issues.",
    category: "Customer Support",
    date: "2024-03-02",
    status: "escalated",
    sentiment: "negative"
  },
  {
    id: 15,
    user: "Arjun Dey",
    rating: 4,
    feedback: "Photo upload quality could be better. Sometimes images appear blurry.",
    category: "Technical",
    date: "2024-03-01",
    status: "pending",
    sentiment: "positive"
  },
  {
    id: 16,
    user: "Simran Ahuja",
    rating: 5,
    feedback: "Best fashion exchange platform! Clean interface and reliable users.",
    category: "Platform Experience",
    date: "2024-02-28",
    status: "resolved",
    sentiment: "positive"
  },
  {
    id: 17,
    user: "Yash Agarwal",
    rating: 2,
    feedback: "Location-based matching needs improvement. Too many distant users suggested.",
    category: "Matching Algorithm",
    date: "2024-02-27",
    status: "pending",
    sentiment: "negative"
  },
  {
    id: 18,
    user: "Trisha Nambiar",
    rating: 4,
    feedback: "Love the environmental impact tracking! Motivates me to swap more.",
    category: "Gamification",
    date: "2024-02-26",
    status: "responded",
    sentiment: "positive"
  },
  {
    id: 19,
    user: "Sahil Rastogi",
    rating: 3,
    feedback: "Payment protection system needs enhancement for high-value items.",
    category: "Payment Security",
    date: "2024-02-25",
    status: "pending",
    sentiment: "neutral"
  },
  {
    id: 20,
    user: "Nidhi Chauhan",
    rating: 5,
    feedback: "Amazing way to discover new styles! The community is so helpful and friendly.",
    category: "Community",
    date: "2024-02-24",
    status: "resolved",
    sentiment: "positive"
  }
];

export function FeedbackManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sentimentFilter, setSentimentFilter] = useState("all");

  const filteredFeedback = mockFeedback.filter(feedback => {
    const matchesSearch = feedback.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.feedback.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || feedback.status === statusFilter;
    const matchesSentiment = sentimentFilter === "all" || feedback.sentiment === sentimentFilter;
    return matchesSearch && matchesStatus && matchesSentiment;
  });

  const getStatusBadge = (status: string) => {
    const config = {
      pending: { variant: "secondary" as const, className: "bg-warning text-warning-foreground" },
      responded: { variant: "default" as const, className: "bg-primary text-primary-foreground" },
      resolved: { variant: "default" as const, className: "bg-primary text-primary-foreground" },
      escalated: { variant: "destructive" as const, className: "" }
    };
    
    const { variant, className } = config[status as keyof typeof config] || config.pending;
    
    return (
      <Badge variant={variant} className={className}>
        {status}
      </Badge>
    );
  };

  const getSentimentBadge = (sentiment: string) => {
    const config = {
      positive: { variant: "default" as const, className: "bg-primary text-primary-foreground" },
      negative: { variant: "destructive" as const, className: "" },
      neutral: { variant: "outline" as const, className: "" }
    };
    
    const { variant, className } = config[sentiment as keyof typeof config] || config.neutral;
    
    return (
      <Badge variant={variant} className={className}>
        {sentiment}
      </Badge>
    );
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'fill-warning text-warning' : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Feedback & Reviews</h1>
          <p className="text-muted-foreground">Monitor user feedback and manage customer satisfaction.</p>
        </div>
        <Button className="gap-2">
          <MessageSquare className="h-4 w-4" />
          Export Feedback
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-warning" />
              <div>
                <p className="text-2xl font-bold">4.2</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">387</p>
                <p className="text-sm text-muted-foreground">Positive Reviews</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <ThumbsDown className="h-5 w-5 text-destructive" />
              <div>
                <p className="text-2xl font-bold">43</p>
                <p className="text-sm text-muted-foreground">Negative Reviews</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-warning" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Pending Response</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Feedback Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search by user or feedback content..." 
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
                <SelectItem value="responded">Responded</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="escalated">Escalated</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sentimentFilter} onValueChange={setSentimentFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by sentiment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sentiments</SelectItem>
                <SelectItem value="positive">Positive</SelectItem>
                <SelectItem value="negative">Negative</SelectItem>
                <SelectItem value="neutral">Neutral</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Feedback Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Feedback</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Sentiment</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFeedback.map((feedback) => (
                  <TableRow key={feedback.id}>
                    <TableCell>
                      <div className="font-medium">{feedback.user}</div>
                    </TableCell>
                    <TableCell>
                      {renderStars(feedback.rating)}
                    </TableCell>
                    <TableCell>
                      <div className="max-w-md">
                        <p className="text-sm truncate">{feedback.feedback}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{feedback.category}</Badge>
                    </TableCell>
                    <TableCell>
                      {getSentimentBadge(feedback.sentiment)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(feedback.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(feedback.status)}
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
                            View Full Feedback
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Reply className="mr-2 h-4 w-4" />
                            Reply to User
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-primary">
                            <Check className="mr-2 h-4 w-4" />
                            Mark as Resolved
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