"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

import { ReactNode } from 'react';

interface CardWrapperProps {
  children: ReactNode;
  className?: string;
}



export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  const CardWrapper = ({ children, className = "" }: CardWrapperProps) => (
    <motion.div
      variants={cardVariants}
      className={`bg-white p-6 rounded-xl shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between p-4 bg-white border-b"
      >
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-semibold text-purple-900">
            Welcome Aboard, Blessing! 🙌{" "}
            <span className="text-sm text-gray-600">
              We're thrilled to have you join Techrity Team!
            </span>
          </h1>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg"
            >
              Update Profile
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <div className="container mx-auto p-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Analytics Card */}
          <CardWrapper>
            {isLoading ? (
              <div className="space-y-3">
                <Skeleton className="h-8 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
                <div className="mt-4">
                  <Skeleton className="h-10 w-1/3" />
                </div>
              </div>
            ) : (
              <motion.div variants={fadeInVariants}>
                <h2 className="text-2xl font-semibold mb-2">Analytics</h2>
                <p>Performance metrics</p>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 text-3xl font-bold text-purple-600"
                >
                  85%
                </motion.div>
              </motion.div>
            )}
          </CardWrapper>

          {/* Activities Card */}
          <CardWrapper className="row-span-2">
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-1/2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : (
              <motion.div variants={fadeInVariants}>
                <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
                <ul className="space-y-2">
                  {['New program added', 'Completed milestone', 'Updated profile'].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </CardWrapper>

          {/* Quick Actions */}
          <CardWrapper>
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-1/2" />
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Skeleton className="h-10" />
                  <Skeleton className="h-10" />
                </div>
              </div>
            ) : (
              <motion.div variants={fadeInVariants}>
                <h2 className="text-2xl font-semibold mb-2">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {['New Program', 'Add User'].map((text, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="outline">{text}</Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </CardWrapper>

          {/* Progress Card */}
          <CardWrapper>
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-2/3" />
                <Skeleton className="h-2 w-full rounded-full" />
                <Skeleton className="h-4 w-1/4" />
              </div>
            ) : (
              <motion.div variants={fadeInVariants}>
                <h2 className="text-2xl font-semibold mb-2">Current Progress</h2>
                <motion.div
                  className="w-full bg-gray-200 rounded-full h-2 mt-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="bg-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  />
                </motion.div>
                <p className="mt-2">75% Completed</p>
              </motion.div>
            )}
          </CardWrapper>

          {/* Upcoming Events */}
          <CardWrapper className="col-span-2">
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-1/3" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-6" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-6" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              </div>
            ) : (
              <motion.div variants={fadeInVariants}>
                <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: 'Team Meeting', time: 'Tomorrow, 10:00 AM' },
                    { title: 'Workshop', time: 'Friday, 2:00 PM' }
                  ].map((event, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 p-3 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <p className="font-semibold">{event.title}</p>
                      <p className="text-sm text-gray-600">{event.time}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </CardWrapper>
        </motion.div>

        {/* Timestamp */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 text-sm text-gray-500"
        >
          Last updated: 2025-04-25 01:14:11 UTC by @JAGADEESHWARAN20
        </motion.div>
      </div>
    </div>
  );
}