# SharePoint & TypeScript

[Typescript Documentation](https://www.typescriptlang.org/docs/home.html)

## Add TypeScript Related NuGetPackages

![NuGet](_images/nuget.png)

## Enable Sourcemap Deploy

- Unload project
- Add this to the end of *.csproj
- Reload project

```
<Target Name="AddTsToContent" AfterTargets="CompileTypeScript" Condition="'$(BuildingProject)' != 'false'">
  <ItemGroup>
      <Content Include="@(TypeScriptCompile)" Condition="'$(Configuration)'=='Debug'" />
  </ItemGroup>
</Target>
```

![tsbuild](_images/tsbuild.png)