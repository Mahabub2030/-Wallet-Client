import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { Camera, ShieldCheck } from "lucide-react";

export default function Profile() {
  const { data: userData, isLoading } = useGetMeQuery(undefined);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        Loading profile...
      </div>
    );
  }

  const user = userData?.data;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT: Avatar */}
        <Card>
          <CardContent className="flex flex-col items-center gap-4 pt-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user?.avatar} />
              <AvatarFallback className="text-xl">
                {user?.name?.charAt(0)?.toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <Button variant="outline" size="sm" className="gap-2">
              <Camera className="h-4 w-4" />
              Change Photo
            </Button>

            <div className="text-center">
              <p className="font-medium">{user?.name}</p>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </CardContent>
        </Card>

        {/* RIGHT: Details */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* Name */}
            <div className="space-y-1">
              <Label>Full Name</Label>
              <Input value={user?.name || ""} disabled />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label>Email Address</Label>
              <Input value={user?.email || ""} disabled />
            </div>

            {/* Role */}
            <div className="space-y-1">
              <Label>Role</Label>
              <div className="flex items-center gap-2">
                <Input value={user?.role} disabled />
                <ShieldCheck className="h-4 w-4 text-green-600" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button disabled>Update Profile</Button>
              <Button variant="outline" disabled>
                Change Password
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Profile editing will be enabled once backend update API is
              connected.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
