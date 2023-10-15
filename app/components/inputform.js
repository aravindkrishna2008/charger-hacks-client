"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { useForm } from "react-hook-form"

import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from "../../firebase/index"
 
const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }).email({ message: "Please enter a valid email."}),
  password: z.string().min(8, { message: "Password must be atleast 8 characters."}),
})
 
export function ProfileForm({ method }) {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password: ""
        },
      })
     
      // 2. Define a submit handler.
      async function onSubmit(values) {
        console.log("hi")
        if(method == 'si') {
            console.log(values)
            let user2 = await signInWithEmailAndPassword(getAuth(app), values.username, values.password)
            console.log(user2)
        } else {
            console.log(values)
            let user1 = await createUserWithEmailAndPassword(getAuth(app), values.username, values.password)
            console.log(user1)
        }
      }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="hi@example.com" {...field} />
              </FormControl>
              <FormDescription>
                Your email for the account
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="********" {...field} />
              </FormControl>
              <FormDescription>
                A secure password for your account
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" onClick={() => onSubmit(form.getValues())}>Submit</Button>
      </form>
    </Form>
  )
}