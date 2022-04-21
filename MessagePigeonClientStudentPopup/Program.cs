using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MessagePigeonClientStudentPopup
{
    internal static class Program
    {
        /// <summary>
        /// 应用程序的主入口点。
        /// </summary>
        [STAThread]
        static void Main(string[] args)
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            string argTeacherName = "";
            string argMessage = "";
            string argDelayTimeStr = "";
            bool debug = true;
            bool closeRequest = false;
            string argToken = "";
            string argMessageIdStr = "";
            string argBaseUrl = "";
            for (int i = 0; i < args.Length; i++)
            {
                if (args[i] == "--no-debug")
                {
                    debug = false;
                }
                else if (args[i] == "--close-request")
                {
                    closeRequest = true;
                }
                else if (args[i] == "--teacher-name")
                {
                    argTeacherName = args[i + 1];
                    i++;
                }
                else if (args[i] == "--delay-time")
                {
                    argDelayTimeStr = args[i + 1];
                    i++;
                }
                else if (args[i] == "--token")
                {
                    argToken = args[i + 1];
                    i++;
                }
                else if (args[i] == "--message-id")
                {
                    argMessage = args[i + 1];
                    i++;
                }
                else if (args[i] == "--base-url")
                {
                    argBaseUrl = args[i + 1];
                    i++;
                }
                else if (args[i] == "--message-start")
                {
                    for (int j = i + 1; args[j] != "--message-end"; j++)
                    {
                        argMessage += args[j].Replace(@"\n", Environment.NewLine);
                        if (args[j + 1] != "--message-end")
                        {
                            argMessage += " ";
                        }

                        i++;
                    }

                    i++;
                }
            }

            if (debug)
            {
                Application.Run(new Form1());
            }
            else
            {
                bool delayTimeParseSuccess = uint.TryParse(argDelayTimeStr, out uint delayTime);
                bool messageIdParseSuccess = uint.TryParse(argMessageIdStr, out uint messageId);
                if (!delayTimeParseSuccess)
                {
                    MessageBox.Show(@"时间必须为数字", @"时间错误", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }

                if (!messageIdParseSuccess && closeRequest)
                {
                    MessageBox.Show(@"消息ID必须为数字", @"消息ID错误", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }

                Application.Run(new Form2(argTeacherName, argMessage, delayTime, closeRequest, argToken, messageId,
                    argBaseUrl));
            }
        }
    }
}